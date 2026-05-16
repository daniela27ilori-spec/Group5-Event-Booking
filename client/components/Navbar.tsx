'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut, User, Settings } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const router = useRouter();

  const isAuthenticated = typeof window !== 'undefined' ? !!localStorage.getItem('token') : false;
  const userRole = typeof window !== 'undefined' ? localStorage.getItem('userRole') : null;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Bookings', href: '/booking' },
  ];

  const adminNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Admin', href: '/admin' },
  ];

  const displayNavItems = userRole === 'admin' ? adminNavItems : navItems;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
    setIsUserMenuOpen(false);
    router.push('/login');
  };

  const handleProfileClick = () => {
    router.push('/dashboard');
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: '#F9CBD6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            
            <span className="hidden sm:inline font-bold text-lg" style={{ color: '#670626' }}>
              PikedEvents
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {displayNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: '#670626' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFBDC5';
                  e.currentTarget.style.color = '#670626';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#670626';
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ color: '#670626' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#670626' }}
                  >
                    <span className="text-white text-sm font-bold" style={{ color: '#FFFFFF' }}>U</span>
                  </div>
                  <span className="hidden sm:inline">Account</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-xl py-1" style={{ backgroundColor: '#F9CBD6', border: `1px solid #FFBDC5` }}>
                    <button
                      onClick={handleProfileClick}
                      className="w-full text-left px-4 py-2 text-sm flex items-center space-x-2 transition-colors"
                      style={{ color: '#670626' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <User size={16} />
                      <span>My Profile</span>
                    </button>
                    <button
                      onClick={() => {
                        router.push('/dashboard');
                        setIsUserMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm flex items-center space-x-2 transition-colors"
                      style={{ color: '#670626' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <Settings size={16} />
                      <span>Settings</span>
                    </button>
                    <div className="border-t my-1" style={{ borderColor: '#FFBDC5' }}></div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm flex items-center space-x-2 transition-colors"
                      style={{ color: '#670626' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#FFBDC5';
                        e.currentTarget.style.color = '#670626';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#670626';
                      }}
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ color: '#670626' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-md text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#670626', color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#670626';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  Sign Up
                </Link>
              </div>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md transition-colors"
              style={{ color: '#670626' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t" style={{ borderColor: '#FFBDC5' }}>
            <div className="flex flex-col space-y-1">
              {displayNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 rounded-md text-base font-medium transition-colors block w-full text-left"
                  style={{ color: '#670626' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {item.label}
                </Link>
              ))}

              {!isAuthenticated && (
                <div className="flex flex-col space-y-2 pt-2 border-t" style={{ borderColor: '#FFBDC5' }}>
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-base font-medium transition-colors block w-full text-left"
                    style={{ color: '#670626' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="px-3 py-2 rounded-md text-base font-medium transition-colors block w-full text-left"
                    style={{ backgroundColor: '#670626', color: '#FFFFFF' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFBDC5'}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#670626';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;