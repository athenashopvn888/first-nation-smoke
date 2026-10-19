/**
 * OB01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "OB01",
  "fullName": "First Nation Smoke Cannabis Dispensary Weed Delivery",
  "street": "1504 Eglinton Ave W",
  "city": "Toronto",
  "region": "ON",
  "postal": "M6E 2G5",
  "phoneDisplay": "(289) 819-5073",
  "phoneTel": "tel:+12898195073",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJ_S7ZRhQzK4gRyNmdIl2MIn8",
  "placeId": "ChIJ_S7ZRhQzK4gRyNmdIl2MIn8",
  "neighbourhood": "Little Jamaica / Fairbank",
  "intersection": "Eglinton Ave W near Dufferin & Oakwood",
  "transit": "Eglinton West Station (Line 1) is the subway anchor; finish west on Eglinton Avenue West via the 32 Eglinton West bus, or use Dufferin buses to the Eglinton corner.",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
