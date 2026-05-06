import React from 'react';

export const Toaster = () => {
  return (
    <div id="sonner-toaster" className="fixed bottom-4 right-4 z-50">
      {/* Mock toast container */}
    </div>
  );
};

export const toast = {
  success: (message: string) => console.log('Success:', message),
  error: (message: string) => console.log('Error:', message),
  info: (message: string) => console.log('Info:', message),
};