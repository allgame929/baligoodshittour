import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <p>
          &copy; {site.name}, {site.region}.
        </p>
        {(site.whatsapp || site.instagram) && (
          <p>
            {site.whatsapp && (
              <a href={`https://wa.me/${site.whatsapp}`}>WhatsApp</a>
            )}
            {site.instagram && (
              <a href={`https://instagram.com/${site.instagram}`}>Instagram</a>
            )}
          </p>
        )}
      </div>
    </footer>
  );
}
