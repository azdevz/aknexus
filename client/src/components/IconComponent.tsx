import { 
  Link, 
  Laptop, 
  Cloud, 
  ListTodo, 
  Brain, 
  ShoppingCart,
  LucideProps 
} from 'lucide-react';

interface IconComponentProps extends LucideProps {
  name: string;
}

export const IconComponent = ({ name, ...props }: IconComponentProps) => {
  switch (name) {
    case "Link":
      return <Link {...props} />;
    case "Laptop":
      return <Laptop {...props} />;
    case "Cloud":
      return <Cloud {...props} />;
    case "ListTodo":
      return <ListTodo {...props} />;
    case "Brain":
      return <Brain {...props} />;
    case "ShoppingCart":
      return <ShoppingCart {...props} />;
    default:
      return null;
  }
};