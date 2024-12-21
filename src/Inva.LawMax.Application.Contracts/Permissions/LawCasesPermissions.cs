using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Inva.LawMax.Permissions
{
    public static class LawCasesPermissions
    {
        public const string GroupName = "LawCases";

        public static class Lawyers
        {
            public const string Default = GroupName + ".Lawyers";
            public const string Create = Default + ".Create";
            public const string Edit = Default + ".Edit";
            public const string Delete = Default + ".Delete";
        }

        public static class Cases
        {
            public const string Default = GroupName + ".Cases";
            public const string Create = Default + ".Create";
            public const string Edit = Default + ".Edit";
            public const string Delete = Default + ".Delete";
        }

        public static class Hearings
        {
            public const string Default = GroupName + ".Hearings";
            public const string Create = Default + ".Create";
            public const string Edit = Default + ".Edit";
            public const string Delete = Default + ".Delete";
        }
    }
}
