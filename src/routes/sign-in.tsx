import React, { CSSProperties } from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Button } from '../components/ui/button';

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7fafc', // equivalent to bg-gray-100
  },
  card: {
    width: '100%',
    maxWidth: '28rem', // equivalent to max-w-md
    backgroundColor: '#ffffff', // equivalent to bg-white
    borderRadius: '0.5rem', // equivalent to rounded-lg
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // equivalent to shadow-md
    padding: '1.5rem', // equivalent to p-6
  },
  heading: {
    fontSize: '1.5rem', // equivalent to text-2xl
    fontWeight: 'bold',
    textAlign: 'center' as CSSProperties['textAlign'], // Explicitly cast to the correct type
    marginBottom: '1.5rem', // equivalent to mb-
  },
};

const CustomSignIn = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Sign In</h2>
        <SignIn
          appearance={{
            elements: {
              rootBox: 'space-y-4',
              formButtonPrimary: (props: React.ComponentProps<typeof Button>) => (
                <Button className="w-full py-2" {...props}>
                  Sign In
                </Button>
              ),
              formFieldInput: 'w-full py-2 px-4 border border-gray-300 rounded-md focus:ring focus:ring-indigo-500',
            },
          }}
        />
      </div>
    </div>
  );
};

export default CustomSignIn;
