/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable import/no-mutable-exports */
let CURRENT: string | string[] = 'NULL';

type CurrentAuthorityType = string | string[] | (() => typeof CURRENT);
/**
 * use  authority or getAuthority
 * @param {string|()=>String} currentAuthority
 */
const renderAuthorize = <T>(Authorized: T): ((currentAuthority: CurrentAuthorityType) => T) => (
  currentAuthority: CurrentAuthorityType,
): T => {
