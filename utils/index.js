const { createJWT, isTokenValid, attachedCookiesToResponse, getUserFromToken } = require('./jwt');
const createTokenUser = require('./createTokenUser');
const checkPermissions = require('./checkPermission');
const sendVerificationEmail = require('./sendVerificationEmail');
const sendResetPasswordEmail = require('./sendResetPasswordEmail');
const sendNotificationOrderStatus = require('./sendNotificationOrder')
const createHash = require('./createHash');

module.exports = {
  createJWT,
  isTokenValid,
  attachedCookiesToResponse,
  createTokenUser,
  checkPermissions,
  sendVerificationEmail,
  sendResetPasswordEmail,
  sendNotificationOrderStatus,
  createHash,
  getUserFromToken
};
