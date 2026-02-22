/**
 * Response interface for API endpoint "https://api.punkapi.com/v2/beers".
 */
export interface BeerItemResponse {
    id: number;
    /** e.g. "Buzz" */
    name: string;
    /** e.g. "A Real Bitter Experience." */
    tagline: string;
    /** e.g. "A light; crisp and bitter IPA brewed with English and American hops. A small batch brewed only once." */
    description: string;
    /** Alcohol By Volume: standard measurement to assess the strength of a particular beer; e.g. 4.5 */
    abv: number;
    /** e.g. "Spicy chicken tikka masala" */
    food_pairing: string[];
}
