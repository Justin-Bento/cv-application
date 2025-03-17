interface ResumeHeaderInterface {
  userName: string;
  phoneNumber: number;
  userEmail: string;
  userWebsite: string;
  githubName: string;
  linkedinUser: string;
}

export default function ResumeHeader({
  userName,
  phoneNumber,
  userEmail,
  userWebsite,
  linkedinUser,
  githubName,
}: ResumeHeaderInterface) {
  return (
    <>
      <div className="space-y-2" data-type="resume-header">
        <h1 className="text-4xl">{userName}</h1>
        <div className="flex items-center divide-x-2 divide-gray-900">
          <p className="text-sm pr-2">{phoneNumber}</p>
          <p className="text-sm px-2">{userEmail}</p>
          <p className="text-sm px-2">linkedin.com/in/{linkedinUser}</p>
          <p className="text-sm px-2">{userWebsite}</p>
          <p className="text-sm px-2">github.com/{githubName}</p>
        </div>
      </div>
    </>
  );
}
