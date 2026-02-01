
export type Gender = 'Male' | 'Female';

export interface Sport {
  id: string;
  name: string;
  description: string;
  icon: string;
  imageUrl: string;
  category: 'Team' | 'Individual' | 'Fun';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface RegistrationFormData {
  fullName: string;
  rollNumber: string;
  department: string;
  semester: string;
  contact: string;
  sportId: string;
  gender: Gender;
}
