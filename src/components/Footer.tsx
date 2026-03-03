const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-card">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© 2026 All Rights Reserved Schlork Pvt Ltd</p>
        <div className="flex items-center gap-6">
          <span>info@schlork.com</span>
          <span>+91-XXXX-XXXXXX</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
