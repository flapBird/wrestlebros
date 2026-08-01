interface EmailAddressProps {
  email: string;
  className?: string;
}

/**
 * Render an email address as separate text nodes so Cloudflare's email
 * obfuscation does not turn it into a /cdn-cgi/l/email-protection link.
 */
export default function EmailAddress({ email, className }: EmailAddressProps) {
  const [localPart, domain] = email.split("@");

  return (
    <span className={className}>
      <span>{localPart}</span>
      <span>@</span>
      <span>{domain}</span>
    </span>
  );
}
