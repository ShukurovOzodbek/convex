import { SignInForm } from '@/components/forms/signin-form';

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            <div className="w-full max-w-md">
                <SignInForm />
            </div>
        </div>
    );
}
