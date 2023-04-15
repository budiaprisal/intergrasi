package authdto

type LoginResponse struct {
	Email string `gorm:"type: varchar(255)" json:"email"`
	Token string `gorm:"type: varchar(255)" json:"token"`
	Role  string `json:"role" form:"role" validate:"required"`
}

type RegisterResponse struct {
	Email string `gorm:"type: varchar(255)" json:"email"`
	Token string `gorm:"type: varchar(255)" json:"token"`
	Role  string `json:"role" form:"role" validate:"required"`
}
