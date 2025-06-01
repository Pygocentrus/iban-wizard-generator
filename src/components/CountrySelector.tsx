
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Country } from "@/utils/ibanGeneratorv2";
import { countries, getCountryName } from "@/utils/countries";

interface CountrySelectorProps {
  onCountryChange: (countryCode: string) => void;
  selectedCountry?: string;
}

export function CountrySelector({ onCountryChange, selectedCountry }: CountrySelectorProps) {
  return (
    <div className="w-full">
      <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 mb-2">
        Select Country
      </label>
      <Select onValueChange={onCountryChange} value={selectedCountry}>
        <SelectTrigger className="w-full h-12 text-base">
          <SelectValue placeholder="Choose a country..." />
        </SelectTrigger>
        <SelectContent className="max-h-60">
          {countries.map((country: Country) => (
            <SelectItem key={country.code} value={country.code} className="py-3">
              <div className="flex items-center gap-3">
                <span className="text-lg">{country.code}</span>
                <span>{getCountryName(country.name)}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
