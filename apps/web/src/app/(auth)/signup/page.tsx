import { SignUpForm } from '@/components/forms/signup-form';

export default function SignUpPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <div className="w-full max-w-md">
                <SignUpForm />
            </div>
        </div>
    );
}
