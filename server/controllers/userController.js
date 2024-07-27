import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { User } from "../models/User.js";
import { Course } from "../models/Course.js";
import crypto from "crypto";
import { sendEmail } from "../utils/sendEmail.js";

export const register = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;


    const file = req.file;

    if (!name || !email || !password)
        return next(new ErrorHandler("Please fill all fields", 400));


    let user = await User.findOne({ email });
    if (user) return next(new ErrorHandler("User already exists"), 409)
    user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "temp",
            url: "temp",
        },
    })
    res.send(201).json({
        success: true,
        meassage: "Registration successful.",
    });

});

export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;


    const file = req.file;

    if (!email || !password)
        return next(new ErrorHandler("Please fill all fields", 400));


    const user = await User.findOne({ email });
    if (!user) return next(new ErrorHandler("User does not exist"), 401)

    const isMatch = await user.comparePassword(password);

    if (!isMatch) return next(new ErrorHandler("Incorrect Email or Password"), 401)

    sendToken(res, user, `Welcome Back, ${user.name}`, 200);

});

export const logout = catchAsyncError(async (req, res, next) => {
    res.status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
    }).json({
        success: true,
        message: "Logged Out Successfully",
    });

});

export const getMyProfile = catchAsyncError(async (req, res, next) => {
    const user = User.findById(req.user._id);

    res.status(200).json({
        success: true,
        user,
    });
});

export const changePassword = catchAsyncError(async (req, res, next) => {
    const { oldPassword, newPassword } = req.body
    if (!newPassword || !oldPassword)
        return next(new ErrorHandler("Please fill all fields", 400));

    const user = User.findById(req.user._id).select("+password");
    const isMatch = await user.comparePassword(oldPassword);
    if (!isMatch) return next(new ErrorHandler("Incorrect Old Password", 400));

    user.password = newPassword;
    await user.save();

    res.status(200).json({
        success: true,
        message: "Password changed successfully",
    });
});


export const forgetPassword = catchAsyncError(async (req, res, next) => {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user)
        return next(new ErrorHandler("User does not exist", 400));

    const resetToken = await user.getResetToken();
    await user.save();
    const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}`;
    const message = `Click on the link to reset your password. ${url}. If you have not requested then please ignore.`;

    await sendEmail(user.email, "CourseBundler Reset Password", message);
    res.status(200).json({
        successs: true,
        message: `Reset token has been sent to ${user.email}`,
    });
});

export const resetPassword = catchAsyncError(async (req, res, next) => {
    const { token } = req.params;
    const resetPasswordToken = crypto.createHash("sha256").update(token).toString("hex");
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: {
            $gt: Date.now(),
        },
    });

    if (!user)
        return next(new ErrorHandler("Token is invalid or has been expired"));

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();
    res.status(200).json({
        successs: true,
        message: "Password Changed Successfully",
    });
});
export const addToPlaylist = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user._id);
    const course = await Course.findById(req.body._id);
    if (!course) return next(new ErrorHandler("Invalid Course Id", 404));
    const itemExist = user.playlist.find((item) => {
        if (item.course.toString() === course._id.toString()) return true;
    });
    if (itemExist) return next(new ErrorHandler("Item already exists", 409));

    user.playlist.push({
        course: course._id,
        poster: course.poster.url,
    })
    await user.save();
    res.status(200).json({
        success: true,
        message: "Added To Playlist",
    });
});
export const removeFromPlaylist = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user._id);
    const course = await Course.findById(req.query._id);
    if (!course) return next(new ErrorHandler("Invalid Course Id", 404));

    const newPlaylist = user.playlist.filter((item) => {
        if (item.course.toString() !== course._id.toString()) return item;
    });
    user.playlist = newPlaylist;
    await user.save();
    res.status(200).json({
        success: true,
        message: "Remmoved From Playlist",
    });
});

