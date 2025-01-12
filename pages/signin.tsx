import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import CustomNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FcGoogle } from 'react-icons/fc';

export default function SignUpForm() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    // Simulate sign-up action
    try {
      // Replace with actual sign-up logic
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }
      if (email && password && fullName) {
        router.push('/dashboard'); // Redirect to dashboard on successful sign-up
      } else {
        throw new Error('Invalid input');
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
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre Completo
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
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
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirmar Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
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
            <Button
              className="w-full flex items-center justify-center mb-4"
              style={{ backgroundColor: '#4285F4', color: 'white' }}
            >
              <FcGoogle className="mr-2" />
              Sign up with Google
            </Button>
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
      <Footer />
    </div>
  );
}