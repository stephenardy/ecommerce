import { Button } from "@/components/ui/button";

const ButtonRegister = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button className="cursor-pointer" variant="outline">
        Register
      </Button>
    </div>
  );
};

export default ButtonRegister;
