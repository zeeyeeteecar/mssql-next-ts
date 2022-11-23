export interface Permission {
  permission_ID: number;
  permission_section: string;
  permission_section_code: string;
  permission_item: string;
  permission_item_code: string;
  permission_item_description: string;
}

export interface Prop_Permission {
  permission: Permission;
}

export interface Array_Permission {
  array_Permission: Permission[];
}
