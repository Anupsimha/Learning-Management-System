import { clerkClient } from '@clerk/express';

//Update role to educator
export const updateRoleEducator = async (req , res) => {
    try {
        const userId = req.auth.userId;

        await clerkClient.users.updateUserMetadata(userId , {
            publicMetadata: {
                role: 'educator'
            }
        })

        res.json({
            success: true,
            message: 'You can publish a new course now'
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}