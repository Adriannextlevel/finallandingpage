
import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = {
    'Product': ['Features', 'Pricing', 'Examples'],
    'Company': ['About Us', 'Contact', 'Careers'],
    'Legal': ['Privacy Policy', 'Terms of Service'],
  };

  const Logo = () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={'h-6 w-6'}>
      <path d="M4 4 L 20 4 L 12 12 Z" />
      <path d="M4 20 L 20 20 L 12 12 Z" />
    </svg>
  );

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="/" aria-label="Home" className="flex items-center gap-2 mb-4">
              <Logo />
            </a>
            <p className="text-sm text-muted-foreground">
              Build fast. Look professional. Let AI do the heavy lifting.
            </p>
          </div>
          <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-semibold text-foreground mb-4">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FastPage AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;