export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  metric: string;
  metricLabel: string;
  category: 'digital' | 'cinema-ott' | 'production' | 'b2b-regional';
  features: string[];
}

export interface InquiryFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  budgetRange: string;
  targetRegion: string;
  message: string;
}

export interface CampaignPlanItem {
  id: string;
  name: string;
  category: string;
  reachEstimate: number; // in thousands
  defaultSelected: boolean;
}
