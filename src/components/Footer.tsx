import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-amber-900/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500">© {new Date().getFullYear()} Aurum. All rights reserved.</p>
      </div>
    </footer>
  );
}