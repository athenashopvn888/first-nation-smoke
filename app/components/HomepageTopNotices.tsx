import Link from "next/link";

export default function HomepageTopNotices() {
  return <>
    <Link className="deliveryHoursAnnouncement" href="/cannabis-delivery-eglinton-west">NEW WEED DELIVERY 10am -10pm</Link>
    <div className="deliveryAnnouncement" role="status" aria-label="Store welcome announcement">WELCOME TO FIRST NATION SMOKE</div>
  </>;
}
