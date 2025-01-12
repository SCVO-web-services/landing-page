import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import CustomNavbar from '../components/Navbar';

export default function SignUpForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // Simulate sign-up action
    try {
      // Replace with actual sign-up logic
      if (email && password) {
        router.push('/dashboard'); // Redirect to dashboard on successful sign-up
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      const errorMessage = (err as Error).message;
      setError(errorMessage);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="container mx-auto">
      <CustomNavbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md">
          <p className="font-bold text-inherit text-center mb-8 text-4xl">
            Crear Cuenta
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded-md">
                <p className="text-sm">{error}</p>
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? 'Creating account...' : 'Sign up'}
            </Button>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{' '}
              </span>
              <Link
                href="/login"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}