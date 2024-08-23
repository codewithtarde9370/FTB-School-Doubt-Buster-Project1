import User from './../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if(!user){
            return res.status(404).json({ message: 'User not found' })
        }
            const isValidPassword = await bcrypt.compare(password, user.password)
            if (isValidPassword) {
                const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY,
                    { expiresIn: '1h' })
                res.json({
                    success: true,
                    message: 'Logged in successfully',
                    token: token,
                    data: { 
                        email: user.email, 
                        fullName: user.fullName, 
                        role: user.role 
                      } 
                })
            }
    } catch (err) {
        console.log(err)
    }

}
export default Login