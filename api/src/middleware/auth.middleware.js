import { clerkMiddleware } from "@clerk/express";

const requireAuth = async (req, res, next) => {
    const auth = await req.auth();
    
    if(!auth && !auth.userId) {
        return res.status(401).json({message : "Acesso negado"})
    }

}

export default { clerkMiddleware, requireAuth }