package usersdto

type CreateUserRequest struct {
	ID       int    `json:"id"`
	FullName string `json:"fullname" form:"fullname" validate:"required"`
	Email    string `json:"email" form:"email" validate:"required"`
	Password string `json:"password" form:"password" validate:"required"`
	Gender   string `json:"gender" form:"gender" validate:"required"`
	Phone    string `json:"phone" form:"phone" validate:"required"`
	Address  string `json:"address" form:"address" validate:"required"`
	Role     string `json:"role" form:"role" validate:"required"`
}

type UpdateUserRequest struct {
	FullName string `json:"fullname" form:"fullname"`
	Email    string `json:"email" form:"email"`
	Password string `json:"password" form:"password"`
	Gender   string `json:"gender" form:"gender"`
	Phone    string `json:"phone" form:"phone"`
	Address  string `json:"address" form:"address"`
	Role     string `json:"role" form:"role"`
}
