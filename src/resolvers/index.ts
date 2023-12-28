import { CommentResolver } from "./comment/comment.resolver";
import { ProductResolver } from "./product/product.resolver";
import { ReviewResolver } from "./review/review.resolver";
import { UserResolver } from "./userResolver/user.resolver";

export const resolvers = [
    UserResolver,
    ProductResolver,
    ReviewResolver,
    CommentResolver
] as const;