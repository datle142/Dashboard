import Home from "../pages/Home";
import Branch from "../pages/Branch";
import Product from "../pages/Product";
import Customer from "../pages/Customer"

const Dashboard =[
    {path: "/", component : Home},
    {path: "/branch", component : Branch},
    {path: "/product", component: Product},
    {path: "/customer", component: Customer}
  ]

  export { Dashboard};