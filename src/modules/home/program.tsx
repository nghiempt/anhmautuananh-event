import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Program() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-center text-2xl text-red-600 font-bold">
                    Cơ Cấu Giải Thưởng
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <p className="text-sm mb-2 text-center">Dựa theo kết quả XSKT đài Hậu Giang ngày <strong>25/01/2025</strong></p>
                        <Table className='!text-[8px] lg:!text-[14px]'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Giải</TableHead>
                                    <TableHead>Chi tiết</TableHead>
                                    <TableHead>Tiền mặt</TableHead>
                                    <TableHead>Voucher</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Giải Đặc Biệt</TableCell>
                                    <TableCell>3 số cuối Đặc Biệt</TableCell>
                                    <TableCell>15.000.000</TableCell>
                                    <TableCell>20.000.000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Giải Nhất</TableCell>
                                    <TableCell>3 số cuối Giải Nhất</TableCell>
                                    <TableCell>5.000.000</TableCell>
                                    <TableCell>10.000.000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Giải Nhì</TableCell>
                                    <TableCell>3 số cuối Giải Nhì</TableCell>
                                    <TableCell>3.000.000</TableCell>
                                    <TableCell>5.000.000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Giải Ba</TableCell>
                                    <TableCell>3 số cuối Giải Ba</TableCell>
                                    <TableCell>2.000.000</TableCell>
                                    <TableCell>3.000.000</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Giải May mắn</TableCell>
                                    <TableCell>3 số cuối các giải từ Giải Bốn đến Giải Bảy</TableCell>
                                    <TableCell>500.000</TableCell>
                                    <TableCell>500.000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <p className="text-right font-semibold mt-2">Tổng giải thưởng: 80.000.000</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Điều kiện tham gia</h3>
                        <div className="space-y-2 text-justify">
                            <p>Khách hàng khi in sản phẩm tại ProLab Tuấn Anh:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Doanh số mỗi 5.000.000 đồng (tổng hóa đơn sau chiết khấu, không bao gồm các sản phẩm mẫu, cước phí vận chuyển) sẽ được tùy chọn 1 số.</li>
                                <li>Số chọn từ 000 đến 999: ví dụ 005, 169, 999,...</li>
                                <li>Doanh số được tính cộng dồn từ 01/12/2024 đến hết ngày 24/01/2025.</li>
                                <li>ProLab Tuấn Anh sẽ chủ động liên hệ khách hàng mỗi cuối tuần để khách hàng tự chọn số may mắn.</li>
                            </ul>
                        </div>
                    </div>

                    <Alert>
                        <AlertDescription>
                            <div className="space-y-2">
                                <p className="font-semibold">Những điều cần lưu ý:</p>
                                <ul className="list-disc pl-6 space-y-1 text-justify">
                                    <li>Để đảm bảo không trúng trùng giải, số được chọn sẽ không được chọn lại.</li>
                                    <li>ProLab Tuấn Anh công bố khách hàng trúng giải ngay khi có kết quả XSKT đài Hậu Giang ngày 25/01/2025.</li>
                                    <li>Khách hàng trúng thưởng sẽ nhận được tiền mặt và voucher trong 72h kể từ lúc có kết quả.</li>
                                    <li>Mọi thắc mắc về thể lệ, khách hàng liên hệ số 0941 82 6556 (Mr.Thức).</li>
                                </ul>
                            </div>
                        </AlertDescription>
                    </Alert>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Những điều cần lưu ý về Voucher</h3>
                        <div className="space-y-4 text-justify">
                            <div>
                                <h4 className="font-medium mb-2">1. Điều kiện áp dụng:</h4>
                                <ul className="list-disc pl-6 space-y-1 text-justify">
                                    <li>Voucher chỉ được áp dụng khi khách hàng đã thanh toán hoàn toàn các đơn hàng cũ.</li>
                                    <li>Voucher có giá trị cho hóa đơn thanh toán trực tiếp bằng tiền mặt hoặc chuyển khoản (KHÔNG có giá trị khấu trừ công nợ).</li>
                                    <li>Voucher KHÔNG áp dụng chung với các chương trình khuyến mãi khác.</li>
                                    <li>Voucher KHÔNG có giá trị quy đổi thành tiền mặt.</li>
                                    <li>Giá trị giảm KHÔNG cao hơn giá trị Voucher.</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2">2. Sử dụng voucher như thế nào?</h4>
                                <p>Bạn vui lòng cung cấp mã voucher cho nhân viên kế toán trước khi thanh toán, chúng tôi sẽ trừ giá trị voucher vào tổng giá trị đơn hàng của bạn.</p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2">3. Nếu tôi bị mất phiếu thì sao?</h4>
                                <p>Phiếu giấy có giá trị như tiền mặt, KHÔNG có ghi tên người sử dụng. Vì vậy, nếu bạn mất phiếu, Prolab Tuấn Anh sẽ KHÔNG thể giải quyết hoàn tiền hay hủy phiếu cho bạn được.</p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2">4. Nếu tôi muốn cho voucher cho người thân, bạn bè thì sao?</h4>
                                <p>Chỉ người nhận voucher được sử dụng (trường hợp thanh toán giúp người thân, bạn bè, phải liên hệ trực tiếp nhân viên kế toán ProLab Tuấn Anh xác nhận).</p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2">5. Nếu phiếu quá hạn sử dụng thì sao?</h4>
                                <p>Nếu phiếu quá hạn sử dụng thì bạn sẽ KHÔNG sử dụng được. Vì vậy, bạn nên lưu ý đến thời hạn sử dụng được ghi trên phiếu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}