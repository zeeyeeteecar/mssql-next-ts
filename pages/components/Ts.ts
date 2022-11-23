export   type  Permission = {
  permission_ID: number;
  permission_section: string;
  permission_section_code: string;
  permission_item: string;
  permission_item_code: string;
  permission_item_description: string;
};
export default Permission;

export type Prop_Permission = {
  permission: Permission;
};



export type Array_Permission = {
  array_Permission: Permission[];
};
