export class StaffResponseDto {
  id: string;
  userId: string;
  phone: string | null;
  department: string | null;
  position: string | null;
  dateOfBirth: Date | null;
  address: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    email: string;
    fullName: string;
    role: string;
    isActive: boolean;
    lastLogin: Date;
    createdAt: Date;
    updatedAt: Date;
  };
}
