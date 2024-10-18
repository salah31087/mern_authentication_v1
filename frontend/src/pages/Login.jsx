// src/components/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '@/context/authContext';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const { login } = useAuth();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             navigate('/dashboard');
//         } catch (error) {
//             console.error('Login failed:', error);
//             // Handle error (e.g., show error message to user)
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// export default Login;


import { Globe, UserRound } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import bentoBG from '../assets/circuit-bento.webp'
const Login = () => {
    return (
        <section>
            <div className="h-screen w-screen flex items-center justify-center relative bg-[#141316]">
                <img src={bentoBG} className='absolute top-0 transform translate-x-1/2 right-1/2 object-cover w-[40rem] h-auto -z-0'></img>

                <div className="flex flex-col gap-4 min-w-96 relative">

                    <Card className="mx-auto w-full max-w-md bg-hover border-none">
                        <CardHeader className="items-center">
                            <UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
                            <CardTitle className="text-xl">Log in with your email</CardTitle>
                            <CardDescription>Enter your information to login</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <Button variant="outline" className="w-full">
                                    <Globe className="mr-2 size-4" />
                                    Sign up with Google
                                </Button>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-full bg-input"></span>
                                    <span className="text-xs text-muted-foreground">OR</span>
                                    <span className="h-px w-full bg-input"></span>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <a href="#" className="text-sm underline">
                                            Forgot password
                                        </a>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full ">
                                    Log in
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    <div className="mx-auto flex gap-1 text-sm">
                        <p>Don&apos;t have an account yet?</p>
                        <a href="#" className="underline">
                            Signup
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
