import { SignUpForm } from '@/components/signup-form';

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(21, 128, 61, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(21, 128, 61, 0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px',
                    }}
                />
            </div>
            <div className="w-full max-w-md relative z-10">
                <SignUpForm />
            </div>
        </div>
    );
}
