import React, { useCallback, useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, User, BookOpen, Users, LogOut, Bell, Settings, GraduationCap, School, CalendarDays, Activity, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import logo from "../components/images/kristiansandschool-logo.png";

const navLinks = [{
  name: "Home",
  path: "/",
  sections: []
}, {
  name: "About",
  path: "/#about",
  sections: [{
    name: "School Values",
    path: "/#schoolvalues",
    element: "schoolvalues"
  }, {
    name: "Leadership",
    path: "/#leadership",
    element: "leadership"
  }, {
    name: "Facilities",
    path: "/#facilities",
    element: "facilities"
  }]
}, {
  name: "Academics",
  path: "/#academics",
  sections: [{
    name: "School Levels",
    path: "/#levels",
    element: "levels"
  }, {
    name: "Curriculum",
    path: "/#curriculum",
    element: "curriculum"
  }, {
    name: "Class Sessions",
    path: "/#sessions",
    element: "sessions"
  }]
}, {
  name: "Student Life",
  path: "/#student-life",
  sections: [{
    name: "Activities",
    path: "/#activities",
    element: "activities"
  }, {
    name: "Clubs",
    path: "/#clubs",
    element: "clubs"
  }, {
    name: "Transportation",
    path: "/#transportation",
    element: "transportation"
  }]
}, {
  name: "Admissions",
  path: "/#admissions",
  sections: [{
    name: "How to Apply(Requirements)",
    path: "/#admissions",
    element: "admissions"
  }, {
    name: "Apply Now ( Admission Form )",
    path: "/admission-form"
  }, {
    name: "Fee Structure",
    path: "/#admissions",
    element: "admissions"
  }]
}, {
  name: "Contact",
  path: "/contact",
  sections: []
}];
const portalLinks = [{
  name: "Student Portal",
  path: "/student-portal",
  icon: <GraduationCap className="w-5 h-5" />
}, {
  name: "Teacher Portal",
  path: "/staff-portal",
  icon: <School className="w-5 h-5" />
}, {
  name: "Parent Portal",
  path: "/parent-portal",
  icon: <Users className="w-5 h-5" />
}];
const Navbar = () => {
  const {
    user,
    logout,
    isAuthenticated
  } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{
    [key: string]: HTMLDivElement | null;
  }>({});
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (portalRef.current && !portalRef.current.contains(event.target as Node)) {
        setIsPortalOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          setActiveDropdown(current => current === key ? null : current);
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setIsPortalOpen(false);
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);
  const handleLogout = () => {
    logout();
    navigate("/");
    setIsUserMenuOpen(false);
  };
  const handleDropdownHover = useCallback((name: string | null) => {
    setActiveDropdown(name);
  }, []);
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId?.toLowerCase());
    if (element) {
      const navbarHeight = 64; // Height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  const handleNavigation = (section: {
    path: string;
    element?: string;
  }) => {
    if (section.path.startsWith("/#") && section.element) {
      if (location.pathname === "/") {
        scrollToSection(section.element.toLowerCase());
      } else {
        navigate("/");
        setTimeout(() => {
          scrollToSection(section.element?.toLowerCase());
        }, 100);
      }
    } else {
      navigate(section.path);
    }
    setActiveDropdown(null);
    setIsOpen(false);
  };
  const renderDropdownContent = (link: (typeof navLinks)[0]) => {
    if (link.name === "Home") return null;
    return <div className="pt-2">
      <div className="bg-gray-50 rounded-xl shadow-lg py-2 border border-gray-100 ring-1 ring-black ring-opacity-5">
        {link.sections.map(section => <button key={section.name} onClick={() => handleNavigation(section)} className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
          {section.name}
        </button>)}
      </div>
    </div>;
  };
  const renderMobileContent = () => <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
    <div className="py-4">
      {navLinks.map(link => <div key={link.name} className="px-4">
        <div className="py-2">
          <span className="text-sm font-medium text-gray-900">
            {link.name}
          </span>
        </div>
        <div className="space-y-2">
          {link.sections.map(section => <button key={section.name} onClick={() => handleNavigation(section)} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
            {section.name}
          </button>)}
        </div>
      </div>)}
    </div>
  </div>;
  return <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-50 shadow-sm" : "bg-white/80 backdrop-blur-md"}`}>
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="School Logo" className="h-14 w-auto" />
            <span className="text-2xl font-serif font-bold text-blue-700">
              Kristiansand School
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => <div key={link.name} className="relative group" ref={el => dropdownRefs.current[link.name] = el} onMouseEnter={() => link.sections.length > 0 ? handleDropdownHover(link.name) : null} onMouseLeave={() => link.sections.length > 0 ? handleDropdownHover(null) : null}>
            <Link to={link.path} className={`flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors relative ${location.pathname === link.path ? "text-blue-600" : ""}`}>
              <span>{link.name}</span>
              {link.sections.length > 0 && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
            </Link>
            {link.sections.length > 0 && <div className={`absolute top-full left-0 w-56 transform transition-all duration-200 ${activeDropdown === link.name ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
              {renderDropdownContent(link)}
            </div>}
          </div>)}
          {!isAuthenticated ? <div className="relative" ref={portalRef}>
            <button onClick={() => setIsPortalOpen(!isPortalOpen)} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <span>Portals</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isPortalOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute right-0 transform transition-all duration-200 ${isPortalOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
              <div className="pt-2">
                <div className="bg-white rounded-xl shadow-lg py-2 border border-gray-100 ring-1 ring-black ring-opacity-5 w-56">
                  {portalLinks.map(portal => <Link key={portal.name} to={portal.path} className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    {portal.icon}
                    <span>{portal.name}</span>
                  </Link>)}
                  <div className="border-t border-gray-100 my-2" />
                  <Link to="/login" className="flex items-center space-x-3 px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 transition-colors">
                    <User className="w-5 h-5" />
                    <span>Sign In</span>
                  </Link>
                </div>
              </div>
            </div>
          </div> : <div className="relative" ref={userMenuRef}>
            <button onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors group">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <span className="font-medium">{user?.name}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isUserMenuOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`absolute right-0 transform transition-all duration-200 ${isUserMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
              <div className="pt-2">
                <div className="bg-white rounded-xl shadow-lg py-2 border border-gray-100 ring-1 ring-black ring-opacity-5 w-56">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="font-medium text-sm text-gray-900">
                      {user?.email}
                    </p>
                  </div>
                  <Link to={`/${user?.role}-portal`} className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <BookOpen className="w-5 h-5" />
                    <span>My Portal</span>
                  </Link>
                  <Link to="/settings" className="flex items-center space-x-3 px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                  </Link>
                  <button onClick={handleLogout} className="flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors w-full">
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-blue-600 transition-colors">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {renderMobileContent()}
    </div>
  </nav>;
};
export default Navbar;