'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function SignUpForm() {
    const handleGoogleSignUp = () => {
        console.log('Google Sign Up clicked');
    };

    return (
        <Card className="border-border shadow-xl bg-card backdrop-blur-sm">
            <CardHeader className="text-center space-y-4 pb-8">
                <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <svg
                            className="w-6 h-6 text-primary-foreground"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 4.5v15m7.5-7.5h-15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
                <CardTitle className="text-3xl font-bold text-card-foreground tracking-tight">
                    Create Account
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                    Get started with your new account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 px-8 pb-8">
                <Button
                    onClick={handleGoogleSignUp}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-4 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                    </svg>
                    Continue with Google
                </Button>

                <div className="text-center pt-4">
                    <p className="text-muted-foreground">
                        Already have an account?{' '}
                        <Link
                            href="/signin"
                            className="text-primary hover:text-primary/80 font-semibold transition-colors underline-offset-4 hover:underline"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
