using Inva.LawMax.Localization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace Inva.LawMax.Permissions
{
    public class LawCasesPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(LawCasesPermissions.GroupName);

            var lawyersPermission = myGroup.AddPermission(LawCasesPermissions.Lawyers.Default, L("Permission:Lawyers"));
            lawyersPermission.AddChild(LawCasesPermissions.Lawyers.Create, L("Permission:Lawyers.Create"));
            lawyersPermission.AddChild(LawCasesPermissions.Lawyers.Edit, L("Permission:Lawyers.Edit"));
            lawyersPermission.AddChild(LawCasesPermissions.Lawyers.Delete, L("Permission:Lawyers.Delete"));

            var casesPermission = myGroup.AddPermission(LawCasesPermissions.Cases.Default, L("Permission:Cases"));
            casesPermission.AddChild(LawCasesPermissions.Cases.Create, L("Permission:Cases.Create"));
            casesPermission.AddChild(LawCasesPermissions.Cases.Edit, L("Permission:Cases.Edit"));
            casesPermission.AddChild(LawCasesPermissions.Cases.Delete, L("Permission:Cases.Delete"));

            var hearingsPermission = myGroup.AddPermission(LawCasesPermissions.Hearings.Default, L("Permission:Hearings"));
            hearingsPermission.AddChild(LawCasesPermissions.Hearings.Create, L("Permission:Hearings.Create"));
            hearingsPermission.AddChild(LawCasesPermissions.Hearings.Edit, L("Permission:Hearings.Edit"));
            hearingsPermission.AddChild(LawCasesPermissions.Hearings.Delete, L("Permission:Hearings.Delete"));
        }

        private static LocalizableString L(string name)
        {
            return LocalizableString.Create<LawCasesResource>(name);
        }
    }
}
