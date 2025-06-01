
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface IBANDisplayProps {
  iban: string;
  countryName: string;
}

export function IBANDisplay({ iban, countryName }: IBANDisplayProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(iban.replace(/\s/g, ''));
      setCopied(true);
      toast({
        title: "IBAN Copied!",
        description: "The IBAN has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy IBAN to clipboard.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Generated IBAN for {countryName}
            </h3>
            <p className="text-sm text-gray-600">
              Fake but structurally valid IBAN
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border-2 border-dashed border-blue-300">
            <code className="text-xl font-mono text-gray-800 tracking-wide break-all">
              {iban}
            </code>
          </div>
          
          <Button
            onClick={handleCopy}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200"
            size="lg"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy IBAN
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
