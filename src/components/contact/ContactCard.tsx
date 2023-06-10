import { FC } from "react";
import { LucideIcon } from "lucide-react";

interface ContactCardProps {
  title: string;
  content: string;
  Icon: LucideIcon;
}

const ContactCard: FC<ContactCardProps> = ({ title, content, Icon }) => {
  return (
    <div className="flex items-center my-2 ">
      <div className="p-4 bg-secondary flex items-center justify-center rounded">
        <Icon className="text-primary" />
      </div>
      <div className="ml-4">
        <h5 className="  text-md sm:text-base tracking-widest">{title}</h5>
        <p className=" font-thin text-sm">{content}</p>
      </div>
    </div>
  );
};

export default ContactCard;
