const SocialLink = ({ href, children }) => {
    return (<a href={href} className="hover:text-primary-color hover:underline hover:underline-offset-8 font-light text-2xl">{children}</a>);
}
export default SocialLink;