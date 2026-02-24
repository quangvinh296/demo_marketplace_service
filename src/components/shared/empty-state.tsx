import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <Card className="border-dashed">
      <CardContent className="p-12 text-center">
        {icon && (
          <div className="flex justify-center mb-4 text-gray-400">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500 mb-4">{description}</p>
        )}
        {action && (
          <Button onClick={action.onClick} className="bg-[#00BCD4] hover:bg-[#00ACC1]">
            {action.label}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
