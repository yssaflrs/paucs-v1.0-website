
const createTokenUser = (user) => {
    return {
        // name:user.full_name, 
        userId:user._id, 
        role:user.role,
        school_email: user.school_email,
        school_campus: user.school_campus,
        college_dept: user.college_dept,
        full_name: user.full_name,
        course: user.course,
        year: user.year,
        section: user.section,
        gender: user.gender,
        birthdate: user.birthdate,
        address: user.address,
        orf_image: user.orf_image,
        profile_image: user.profile_image,
        cover_image: user.cover_image,
        status: user.status,
        isVerified: user.isVerified,
        isOrfVerified: user.isOrfVerified,
        isVoucherUse: user.isVoucherUse,
        freeUnifStatus: user.freeUnifStatus,
        configuredSettings: user.configuredSettings,
        configureQuestion: user.configureQuestion,
        isConfiguredAnswered: user.isConfiguredAnswered,
        blockedDevices: user.blockedDevices,
        allowedDevices: user.allowedDevices,
        deviceChanges: user.deviceChanges,
        restrictionStartTime: user.restrictionStartTime
   
    }
}



module.exports = createTokenUser






// const createTokenUser = (user) => {
//     return {
//         name:user.full_name, 
//         userId:user._id, 
//         role:user.role}
// }


// module.exports = createTokenUser