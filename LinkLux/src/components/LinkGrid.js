import LinkCard from './LinkCard';

const LinkGrid = ({ links, onDeleteLink }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          name={link.name}
          url={link.url}
          onDelete={() => onDeleteLink(link.id)}
        />
      ))}
    </div>
  );
};

export default LinkGrid;
