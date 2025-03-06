import React from 'react';

const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">404</h1>
            <p className="py-6">Page Not Found</p>
            <a href="/" className="btn btn-primary">Go Home</a>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;