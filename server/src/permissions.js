const { AuthenticationError } = require("apollo-server")

const isAuthenticated = (context) => {
  if (!context.currentUser) {
    throw new AuthenticationError("You need to be logged in")
  }
}

const isAdmin = (context) => {
  isAuthenticated(context)

  if (!context.currentUser.role === "ADMIN") {
    throw new AuthenticationError(
      "You need to have admin permission to do this"
    )
  }
}

module.exports = { isAuthenticated, isAdmin }
