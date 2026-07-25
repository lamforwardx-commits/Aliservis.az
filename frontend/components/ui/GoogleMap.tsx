import { RESTAURANT } from "@/lib/constants";

export function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-border">
      <iframe
        title={`${RESTAURANT.name} location on Google Maps`}
        src={RESTAURANT.mapsEmbed}
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="grayscale-[20%] contrast-110"
      />
    </div>
  );
}
