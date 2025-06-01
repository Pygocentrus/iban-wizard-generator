
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shuffle, Landmark, Shield, Info } from "lucide-react";
import { CountrySelector } from "@/components/CountrySelector";
import { IBANDisplay } from "@/components/IBANDisplay";
import { generateIBAN } from "@/utils/ibanGeneratorv2";
import { countries, getCountryName } from "@/utils/countries";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [generatedIBAN, setGeneratedIBAN] = useState<string>("");
  const { toast } = useToast();

  const handleGenerateIBAN = () => {
    if (!selectedCountry) {
      toast({
        title: "Country Required",
        description: "Please select a country first.",
        variant: "destructive",
      });
      return;
    }

    try {
      const iban = generateIBAN(selectedCountry);
      setGeneratedIBAN(iban);
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Unable to generate IBAN for the selected country.",
        variant: "destructive",
      });
    }
  };

  const selectedCountryData = countries.find(c => c.code === selectedCountry);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Landmark className="w-10 h-10" style={{ color: 'rgb(79, 182, 69)' }} />
            <h1 className="text-4xl font-bold text-gray-900">
              IBAN Generator
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Generate fake but structurally valid IBANs for testing and development purposes
          </p>
        </div>

        {/* Main Generator Card */}
        <Card className="mb-8 shadow-lg border-0 bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-800">Generate IBAN</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <CountrySelector 
              onCountryChange={setSelectedCountry}
              selectedCountry={selectedCountry}
            />

            <Button
              onClick={handleGenerateIBAN}
              disabled={!selectedCountry}
              className="w-full text-white text-lg py-6 transition-all duration-200 shadow-lg"
              style={{ 
                backgroundColor: 'rgb(79, 182, 69)',
                borderColor: 'rgb(79, 182, 69)'
              }}
              onMouseEnter={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.backgroundColor = 'rgb(69, 162, 59)';
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.disabled) {
                  e.currentTarget.style.backgroundColor = 'rgb(79, 182, 69)';
                }
              }}
              size="lg"
            >
              <Shuffle className="w-5 h-5 mr-2" />
              Generate IBAN
            </Button>
          </CardContent>
        </Card>

        {/* Generated IBAN Display */}
        {generatedIBAN && selectedCountryData && (
          <div className="mb-8 animate-in slide-in-from-bottom-4 duration-500">
            <IBANDisplay 
              iban={generatedIBAN} 
              countryName={selectedCountryData.name}
            />
          </div>
        )}

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white border shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6" style={{ color: 'rgb(79, 182, 69)' }} />
                <h3 className="text-lg font-semibold text-gray-800">Safe Testing</h3>
              </div>
              <p className="text-gray-600">
                All generated IBANs are fake and for testing purposes only. 
                They follow the correct format but are not linked to real accounts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Info className="w-6 h-6" style={{ color: 'rgb(79, 182, 69)' }} />
                <h3 className="text-lg font-semibold text-gray-800">Valid Format</h3>
              </div>
              <p className="text-gray-600">
                Generated IBANs pass format validation and checksum verification,
                making them perfect for testing payment systems and forms.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Supported Countries */}
        <Card className="mt-8 bg-white border shadow-md">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Supported Countries</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {countries.map((country) => (
                <div key={country.code} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-mono font-medium">{country.code}</span>
                  <span>{getCountryName(country.name)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
