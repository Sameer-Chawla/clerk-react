import { SignUp } from '@clerk/clerk-react';
import { Button } from '../components/ui/button';

const CustomSignUp = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#E5E7EB' }}>
      <div style={{ width: '100%', maxWidth: '28rem', backgroundColor: '#FFFFFF', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: '600', textAlign: 'center', marginBottom: '2rem' }}>Create Your Account</h2>
        <SignUp
          appearance={{
            elements: {
              rootBox: { marginBottom: '1.5rem' },
              formButtonPrimary: (props: React.ComponentProps<'button'>) => (
                <Button style={{ width: '100%', padding: '0.75rem', backgroundColor: '#4F46E5', color: '#FFFFFF', cursor: 'pointer', border: 'none', borderRadius: '0.375rem', transition: 'background-color 0.3s' }} {...props}>
                  Sign Up
                </Button>
              ),
              formFieldInput: { width: '100%', padding: '0.75rem 1.25rem', border: '1px solid #D1D5DB', borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 0.3s', boxShadow: '0 0 0 0 rgba(79, 70, 229, 0.5)' },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CustomSignUp;
